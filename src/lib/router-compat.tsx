/**
 * Compatibility layer so the existing page components (written for
 * react-router-dom) keep working on top of TanStack Router.
 */
import { forwardRef, useMemo } from "react";
import {
  Link as TSLink,
  useNavigate as useTSNavigate,
  useRouterState,
  useParams as useTSParams,
  Navigate as TSNavigate,
} from "@tanstack/react-router";

type AnyProps = Record<string, any>;

export const Link = forwardRef<HTMLAnchorElement, AnyProps>(function Link(
  { to, replace, state, children, ...rest },
  ref,
) {
  const target = typeof to === "string" ? to : String(to ?? "/");
  if (/^(https?:|mailto:|tel:|#)/.test(target)) {
    return (
      <a ref={ref} href={target} {...rest}>
        {children}
      </a>
    );
  }
  return (
    <TSLink ref={ref as any} to={target as any} replace={replace} {...rest}>
      {children}
    </TSLink>
  );
});

export const NavLink = forwardRef<HTMLAnchorElement, AnyProps>(function NavLink(
  { to, className, style, children, end, ...rest },
  ref,
) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const target = typeof to === "string" ? to : String(to ?? "/");
  const isActive = end
    ? pathname === target
    : pathname === target || (target !== "/" && pathname.startsWith(target + "/"));
  const resolved = {
    className: typeof className === "function" ? className({ isActive }) : className,
    style: typeof style === "function" ? style({ isActive }) : style,
  };
  return (
    <TSLink ref={ref as any} to={target as any} {...resolved} {...rest}>
      {typeof children === "function" ? children({ isActive }) : children}
    </TSLink>
  );
});

export function useNavigate() {
  const navigate = useTSNavigate();
  return (to: string | number, options?: { replace?: boolean }) => {
    if (typeof to === "number") {
      if (typeof window !== "undefined") window.history.go(to);
      return;
    }
    if (/^(https?:|mailto:|tel:)/.test(to)) {
      if (typeof window !== "undefined") window.location.href = to;
      return;
    }
    const [pathname, hashOrSearch] = [to.split("?")[0].split("#")[0], to];
    const search = hashOrSearch.includes("?")
      ? Object.fromEntries(new URLSearchParams(hashOrSearch.split("?")[1].split("#")[0]))
      : undefined;
    const hash = hashOrSearch.includes("#") ? hashOrSearch.split("#")[1] : undefined;
    navigate({ to: pathname as any, search: search as any, hash, replace: options?.replace });
  };
}

export function useLocation() {
  return useRouterState({ select: (s) => s.location });
}

export function useParams<T = Record<string, string>>(): T {
  return useTSParams({ strict: false } as any) as T;
}

export function useSearchParams(): [URLSearchParams, (next: any) => void] {
  const searchStr = useRouterState({ select: (s) => s.location.searchStr });
  const navigate = useTSNavigate();
  const params = useMemo(() => new URLSearchParams(searchStr ?? ""), [searchStr]);
  const setParams = (next: any) => {
    const value = next instanceof URLSearchParams ? next : new URLSearchParams(next);
    navigate({ to: ".", search: Object.fromEntries(value) as any });
  };
  return [params, setParams];
}

export function Navigate({ to, replace }: { to: string; replace?: boolean }) {
  return <TSNavigate to={to as any} replace={replace} />;
}

export default function Button({ children, variant = "primary", href, external, ...props }) {
  const className = `button button--${variant}`;
  const extra = external ? { target: "_blank", rel: "noopener noreferrer" } : {};
  return (
    <a className={className} href={href} {...extra} {...props}>
      {children}
    </a>
  );
}

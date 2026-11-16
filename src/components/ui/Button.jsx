export default function Button({ children, variant = 'primary', href, ...props }) {
  const classes = `button button--${variant}`

  if (href) {
    return (
      <a className={classes} href={href} {...props}>
        {children}
      </a>
    )
  }

  return (
    <button className={classes} type="button" {...props}>
      {children}
    </button>
  )
}

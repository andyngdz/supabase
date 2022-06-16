const FormSection = ({
  children,
  header,
  disabled,
  visible = true,
  className,
}: {
  children: React.ReactNode
  header?: React.ReactNode
  disabled?: boolean
  visible?: boolean
  className?: string
}) => {
  const classes = [
    'grid grid-cols-12 gap-6 px-8 py-8 lg:gap-12',
    `${disabled ? ' opacity-30' : ' opacity-100'}`,
    `${visible ? ' block' : ' hidden'}`,
    `${className}`,
  ]

  return (
    <div className={classes.join(' ')}>
      {header}
      {children}
    </div>
  )
}

const FormSectionLabel = ({ children }: { children: React.ReactNode | string }) => {
  return <label className="text-scale-1200 col-span-12 text-sm lg:col-span-5">{children}</label>
}
const FormSectionContent = ({
  children,
  loading = true,
  fullWidth,
  className,
}: {
  children: React.ReactNode | string
  loading?: boolean
  fullWidth?: boolean
  className?: string
}) => {
  return (
    <div
      className={`
        relative col-span-12 flex flex-col gap-6 lg:col-span-7
        ${fullWidth && '!col-span-12'}
        ${className}
      `}
    >
      {loading ? (
        <div className="flex w-full flex-col gap-2">
          <div className="shimmering-loader h-2 w-1/3 rounded"></div>
          <div className="flex flex-col justify-between space-y-2">
            <div className="shimmering-loader h-[34px] w-2/3 rounded" />
          </div>
        </div>
      ) : (
        children
      )}
    </div>
  )
}

export { FormSection, FormSectionContent, FormSectionLabel }

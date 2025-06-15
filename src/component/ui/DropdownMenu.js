
import React, { useState } from "react"
import { cn } from "../utills/helpers"

const DropdownMenu = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative inline-block text-left">
      {React.Children.map(children, (child) => React.cloneElement(child, { isOpen, setIsOpen }))}
    </div>
  )
}

const DropdownMenuTrigger = React.forwardRef(({ className, children, isOpen, setIsOpen, asChild, ...props }, ref) => {
  const Comp = asChild ? React.Fragment : "button"

  const triggerProps = asChild
    ? {}
    : {
        ref,
        className: cn("inline-flex items-center justify-center", className),
        onClick: () => setIsOpen(!isOpen),
        ...props,
      }

  return (
    <Comp {...triggerProps}>
      {asChild ? React.cloneElement(children, { onClick: () => setIsOpen(!isOpen) }) : children}
    </Comp>
  )
})
DropdownMenuTrigger.displayName = "DropdownMenuTrigger"

const DropdownMenuContent = React.forwardRef(({ className, children, isOpen, ...props }, ref) => {
  if (!isOpen) return null

  return (
    <div
      ref={ref}
      className={cn(
        "absolute right-0 mt-2 w-56 rounded-md border bg-popover p-1 text-popover-foreground shadow-md z-50",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  )
})
DropdownMenuContent.displayName = "DropdownMenuContent"

const DropdownMenuItem = React.forwardRef(({ className, children, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "relative flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none hover:bg-accent hover:text-accent-foreground",
      className,
    )}
    {...props}
  >
    {children}
  </div>
))
DropdownMenuItem.displayName = "DropdownMenuItem"

export { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem }

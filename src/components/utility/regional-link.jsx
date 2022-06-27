import { Link } from "gatsby"
import React from "react"
import { useRegion } from "../../hooks/use-region"
import { toKebab } from "../../utils/to-kebab"

const RegionalLink = ({ to, children, className }) => {
  const { region } = useRegion()

  return <Link to={`/${toKebab(region?.name)}/${to}`} className={className}>{children}</Link>
}

export default RegionalLink

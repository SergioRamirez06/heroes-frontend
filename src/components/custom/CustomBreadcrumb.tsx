import { Link } from "react-router"
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator } from "../ui/breadcrumb"

interface Props {
    currentPage: string
}

export const CustomBreadcrumb = ({ currentPage }: Props) => {
  return (
    <Breadcrumb>
        <BreadcrumbList className="my-5">
            <BreadcrumbItem>
                <BreadcrumbLink asChild>
                <Link to="/">
                    Inicio
                </Link>
                </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
                <BreadcrumbLink className="text-black">{currentPage}</BreadcrumbLink>
            </BreadcrumbItem>
        </BreadcrumbList>
    </Breadcrumb>
  )
}

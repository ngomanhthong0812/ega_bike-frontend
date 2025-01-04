"use client"
import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"
import React from "react"

interface IProps {
    page: number,
    totalPage: number,
    setPage: (page: number) => void
}

const PaginationGlobal: React.FC<IProps> = ({ page = 1, totalPage = 1, setPage }) => {
    const handlePrevious = () => {
        if (page > 1) setPage(page - 1)
    }
    const handleNext = () => {
        if (page < totalPage) setPage(page + 1)
    }
    const renderPages = () => {
        const pages = [];
        for (let i = 1; i <= totalPage; i++) {
            pages.push(
                <PaginationItem key={i}>
                    <PaginationLink
                        href="#"
                        isActive={i === page}
                    // onClick={() => setPage(i)}
                    >
                        {i}
                    </PaginationLink>
                </PaginationItem>
            )
        }
        return pages
    }
    return (
        <Pagination>
            <PaginationContent>
                <PaginationItem>
                    <PaginationPrevious href="#" onClick={handlePrevious} />
                </PaginationItem>
                {renderPages()}
                <PaginationItem>
                    <PaginationNext href="#" onClick={handleNext} />
                </PaginationItem>
            </PaginationContent>
        </Pagination>
    )
}
export default PaginationGlobal
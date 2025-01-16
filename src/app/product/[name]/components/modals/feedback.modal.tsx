"use client"
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import React, { useState } from "react";
import { FaRegStar, FaStar } from "react-icons/fa";

interface IProps {
    open: boolean;
    setOpen: (open: boolean) => void;
}

export function FeedbackModal({ open, setOpen }: IProps) {
    const [rating, setRating] = useState(1);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        content: "",
    });
    const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = () => {
        console.log('formData', formData);
        setOpen(false);
    }
    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent className="sm:max-w-[700px]">
                <DialogHeader>
                    <DialogTitle className="flex flex-col items-center gap-2">
                        <span className="font-[400]">Đánh giá sản phẩm</span>
                        <p>Xe đạp đường trường Ultegra</p>
                    </DialogTitle>
                    <DialogDescription className="flex gap-2 items-center !mt-5">
                        <span className="text-base">Đánh giá của bạn về sản phẩm:</span>
                    </DialogDescription>
                    <div className="text-primary flex gap-1 justify-center -mt-1 star-rating">
                        {Array.from({ length: rating }, (_, index) => (
                            <FaStar key={index} className="cursor-pointer" size={25} onClick={() => setRating(index + 1)} />
                        ))}
                        {Array.from({ length: 5 - rating }, (_, index) => (
                            <FaRegStar key={index} className="cursor-pointer" size={25} onClick={() => setRating(rating + index + 1)} />
                        ))}
                    </div>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <input type="text"
                        name="name"
                        placeholder="Nhập họ và tên của bạn"
                        className="outline-none border border-[#c4cdd5] p-2 rounded-md"
                        onChange={handleChange}
                    />
                    <input type="email"
                        name="email"
                        placeholder="Nhập email của bạn"
                        className="outline-none border border-[#c4cdd5] p-2 rounded-md"
                        onChange={handleChange}
                    />
                    <textarea
                        name="content"
                        placeholder="Nhập nội dung đánh giá của bạn về sản phẩm này"
                        className="outline-none border border-[#c4cdd5] p-2 rounded-md min-h-[150px]"
                        onChange={handleChange}
                    />
                </div>
                <DialogFooter>
                    <Button type="submit" className="bg-[#80bb35] text-white" onClick={handleSubmit}>Gửi đánh giá</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

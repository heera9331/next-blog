"use client";
import React, { useState } from "react";
import { TextArea } from "@/components";

const CommentForm = () => {
    const [comment, setComment] = useState();

    return (
        <div className="m-auto my-4">
            <p className="text-xl font-semibold">Comment</p>
            <form method="post">
                <TextArea
                    label="Comment"
                    placeholder="Max limit 100 characters"
                    onChange={(e: any) => {
                        setComment(e.target.value);
                    }}
                    htmlFor={'comment'}
                    value={comment}
                />
                <div className="flex justify-center pt-2 flex-col items-center">
                    <button className="bg-white border border-black border-opacity-25 rounded-sm px-2 py-1 font-semibold hover:bg-gray-100">
                        Submit
                    </button>
                </div>
            </form>

        </div>
    )
}

export default CommentForm;
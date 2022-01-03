import React, { useEffect } from "react";
import { useParams } from "react-router";

function WeekOne() {
    let { weekSlug } = useParams();

    useEffect(() => {
        // Fetch week using the weekSlug
    }, [weekSlug]);

    return (
        <div className="home">
            <div class="container">
                <h1 className="mt-5"> Week 1</h1>
                <h6 className="mb-5">The post slug is, {weekSlug}</h6>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry's standard dummy text ever
                    since the 1500s, when an unknown printer took a galley of type and
                    scrambled it to make a type specimen book.
                </p>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry's standard dummy text ever
                    since the 1500s, when an unknown printer took a galley of type and
                    scrambled it to make a type specimen book.
                </p>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry's standard dummy text ever
                    since the 1500s, when an unknown printer took a galley of type and
                    scrambled it to make a type specimen book.
                </p>
            </div>
        </div>
    );
}

export default WeekOne;
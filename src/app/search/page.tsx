"use client";

import { use, useState } from "react";

type PageProps = {
    searchParams: Promise<{ query: string }>;
};

export default function Page({ searchParams }: PageProps) {
    const { query } = use(searchParams);

    const [count, setCount] = useState(0);

    return (
        <div>
            <p>{query}</p>
            <button onClick={() => setCount(count + 1)}>Click me</button>
            <p>Count: {count}</p>
        </div>
    );
}

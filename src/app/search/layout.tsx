"use client";

import { ReactNode, useEffect, useState } from "react";

type SearchLayoutProps = {
    children: ReactNode;
};

export default function SearchLayout({ children }: SearchLayoutProps) {
    const [shouldRender, setShouldRender] = useState(false);

    useEffect(() => {
        setShouldRender(true);
    }, []);

    if (!shouldRender) {
        return null;
    }

    return children;
}

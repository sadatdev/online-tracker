interface ILayoutProps {
    children: React.ReactNode;
    bgColor?: string;
}

export const Layout = ({ children, bgColor = '#253237' }: ILayoutProps) => {
    return (
        <div
            className="min-h-screen text-white flex justify-center items-center"
            style={{ backgroundColor: bgColor }}
        >
            <main className="p-3 md:p-5">{children}</main>
        </div>
    );
};

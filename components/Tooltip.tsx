import { FC, ReactNode, useRef } from "react";

interface Props {
    children: ReactNode;
    tooltip?: string;
}

const ToolTip: FC<Props> = ({ children, tooltip }): JSX.Element => {
    const tooltipRef = useRef<HTMLSpanElement>(null);
    const container = useRef<HTMLDivElement>(null);

    return (
        <div
            ref={container}
            onMouseEnter={({ clientX }) => {
                if (!tooltipRef.current || !container.current) return;
                //const { right } = container.current.getBoundingClientRect();

                //tooltipRef.current.style.right = clientX - right + "px";
            }}
            className="group relative"
        >
            {children}

            <span
                //ref={tooltipRef}
                className="invisible group-hover:visible opacity-0 group-hover:opacity-100 transition bg-indigo-400 text-white px-2 py-1 rounded absolute top-full mt-2 whitespace-nowrap"
            >
                {tooltip}
            </span>

        </div>
    );
};

export default ToolTip;
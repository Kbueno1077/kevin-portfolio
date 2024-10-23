// src/framer-motion.d.ts
import { HTMLAttributes } from "react";
import { MotionProps } from "framer-motion";

declare module "framer-motion" {
    interface MotionDivProps
        extends HTMLAttributes<HTMLDivElement>,
            MotionProps {}

    export const motion: {
        div: React.ComponentType<MotionDivProps>;
        // Add other motion components if necessary
    };
}

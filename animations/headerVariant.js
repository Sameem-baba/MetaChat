export const parentVar = {
    from: {},
    to: {
        transition: {
            staggerChildren: 1,
            when: "beforeChildren",
        },
    },
    exit: {},
};

export const itemVar = {
    from: {
        opacity: 0,
    },
    to: {
        opacity: 1,

        transition: {
            duration: 1.5,
        },
    },
    exit: {
        opacity: 0,
    },
}
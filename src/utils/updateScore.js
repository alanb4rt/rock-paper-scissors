export const updateScore = (result, setScore) => {
    switch (result) {
        case "You win":
            setScore((prev) => prev + 1);
            break;
        case "You lose":
            setScore((prev) => (prev > 0 ? prev - 1 : 0));
            break;
    }
};
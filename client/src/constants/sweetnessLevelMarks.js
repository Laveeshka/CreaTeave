export const sweetnessLevelMarks = [
    {
        value: 0,
        label: "No sugar"
    },
    {
        value: 25,
        label: "Little sugar"
    },
    {
        value: 50,
        label: "Half sugar"
    },
    {
        value: 75,
        label: "Less sugar"
    },
    {
        value: 100,
        label: "Normal sugar"
    }
]

export const sweetnessLevelDescription = (sweetnessLevel) => {
    switch(sweetnessLevel) {
        case 0:
            return "No sugar ╳"
        case 25:
                return "Little sugar 🍬"
        case 50:
            return "Half sugar 🍬🍬"
        case 75:
            return "Less sugar 🍬🍬🍬"
        case 100:
            return "Normal sugar 🍬🍬🍬🍬"
        default:
            return "sugar"
    }
}
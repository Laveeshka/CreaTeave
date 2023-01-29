export const iceLevelMarks = [
    {
        value: 0,
        label: "No ice"
    },
    {
        value: 50,
        label: "Half ice"
    },
    {
        value: 100,
        label: "Normal ice"
    }
]

export const iceLevelDescription = (iceLevel) => {
    switch(iceLevel) {
        case 0:
            return "No ice ╳"
        case 50:
            return "Half ice 🧊"
        case 100:
            return "Normal ice 🧊🧊"
        default:
            return "ice"
    }
}
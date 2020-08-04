export default function convertHoursToMinutes(time: string) {
    const [hours, minutes] = time.split(':').map(Number);
    const timeInMinuts = (hours * 60) + minutes;

    return timeInMinuts;
}
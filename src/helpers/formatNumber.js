export default function formatNumber(number) {
    const k = 1000
    if (number < k) return number
    if (number < 100 * k) return `${Math.floor(number / 100)/10}K+`
    if (number < k * k) return `${Math.floor(number / k)}K+`
    if (number < 100 * k * k) return `${Math.floor(number / (100 * k))/10}M+`
    if (number < k * k * k) return `${Math.floor(number / (k * k))}M+`
    return `${Math.floor(number / (100 * k * k)) / 10}B+`
}

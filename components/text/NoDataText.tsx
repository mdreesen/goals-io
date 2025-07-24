
export default async function NoDataText({ text, fontSize = '2xl' }: any) {

    return <h3 className={`text-${fontSize} font-extrabold text-center mb-10
    bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500`}>{text}</h3>
}

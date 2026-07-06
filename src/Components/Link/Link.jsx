const 
MyLink = ({ href, title }) => {
  return (
    <a
      href={href}
      className="px-4 py-2 text-lg font-medium text-gray-300 rounded-lg hover:text-blue-600 hover:bg-gray-200 transition"
    >
      {title}
    </a>
  )
}

export default MyLink  
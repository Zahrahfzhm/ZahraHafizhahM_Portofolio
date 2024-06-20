export default function AdminContainer({children}){
    return(
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-5 mt-4 mb-4 w-full max-h-screen">
            {children}
        </div>
    )
}
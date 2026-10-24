function AddQuest(props){
    return (
        <div className="flex gap-4 w-full justify-center items-center">
            <input placeholder="Quest" className="rounded-full bg-[#393939] text-[#AEB8CA] pl-2 input-smflex w-[70%] focus:outline-none"/>
            <button className="flex items-center text-center rounded-full bg-[#7138F5] text-[#AEB8CA] h-fit px-2 pb-1
                text-lg transform ease-out duration-300" onClick={() => props.saveAddQuest("Falar com o ferreiro")}>+</button>
        </div>
    )
}

export default AddQuest
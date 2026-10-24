import AddQuest from "./AddQuests"

function App() {
  function saveAddQuest(tittle){
    console.log(tittle)
  }
  return(
    <div className="flex h-screen justify-center items-center bg-[#292F3A]">
      <div className="card flex flex-col w[80%] lg:w-[50%] h-[70%] shadow-md 
      rounded-sm transform ease-out duration-300 items-center p-10 gap-5">
        <h1 className="text-5x1 font-work font-bold w-fit text-center text-[#AEB8CA]">
          Quests To Do
        </h1>
        <AddQuest saveAddQuest={saveAddQuest}/>
      </div>
    </div>
  )
}

export default App

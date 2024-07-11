import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Note from "../components/Note";

const Notes = () => {
  const { notes } = useContext(AppContext);
  // const [selectedImage, setSelectedImage] = useState(null);

  // const handleImageChange = (event) => {
  //   const file = event.target.files[0];
  //   if (file) {
  //     const reader = new FileReader();
  //     reader.onloadend = () => {
  //       setSelectedImage(reader.result);
  //     };
  //     reader.readAsDataURL(file);
  //   }
  // };

  return (
    <div className="mt-14 w-[83%] h-[670px] overflow-scroll pl-3">
      {notes.length === 0 ? (
        <div className="w-[100%] h-[100%] flex flex-col justify-center items-center text-[25px]">
          {/* <div>
            <input type="file" accept="image/*" onChange={handleImageChange} />
            {selectedImage && (
              <div>
                <img
                  src={selectedImage}
                  alt="Selected"
                  style={{ width: "200px", height: "200px" }}
                />
              </div>
            )}
          </div> */}
          Create your first note
        </div>
      ) : (
        notes.map((note, index) => {
          return <Note key={index} note={note} type="notes" />;
        })
      )}
    </div>
  );
};

export default Notes;

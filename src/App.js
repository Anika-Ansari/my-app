import './App.css';

function App() {
const users = [
  { id: 1, name: "Ali", age: 25, image: "https://picsum.photos/id/1011/200/300" },
  { id: 2, name: "Sara", age: 30, image: "https://picsum.photos/id/1012/200/300" },
  { id: 3, name: "John", age: 22, image: "https://picsum.photos/id/1015/200/300" },
  { id: 4, name: "Ayesha", age: 27, image: "https://picsum.photos/id/1016/200/300" },
  { id: 5, name: "Ahmed", age: 35, image: "https://picsum.photos/id/1018/200/300" },
  { id: 6, name: "Zara", age: 24, image: "https://picsum.photos/id/1020/200/300" },
  { id: 7, name: "Usman", age: 29, image: "https://picsum.photos/id/1021/200/300" },
  { id: 8, name: "Maria", age: 31, image: "https://picsum.photos/id/1025/200/300" },
  { id: 9, name: "Hassan", age: 28, image: "https://picsum.photos/id/1027/200/300" },
  { id: 10, name: "Nida", age: 26, image: "https://picsum.photos/id/1033/200/300" },
  { id: 10, name: "Akmal", age: 26, image: "https://picsum.photos/id/1039/200/300" },
  { id: 10, name: "Tahir", age: 26, image: "https://picsum.photos/id/1048/200/300" },
];

  return (
    <div className="container mt-4">
      <div className="row g-4">
        {users.map((user) => (
          <div className="col-md-4" key={user.id}>
            <div className="card" style={{ width: "18rem" }}>
              <img src={user.image} className="card-img-top " alt={user.name} style={{ height: "180px", objectFit: "cover" }}/>
              <div className="card-body">
                <h5 className="card-title">{user.name}</h5>
                <p className="card-text">Age: {user.age}</p>
                <a href="#" className="btn btn-primary">
                  Add to Cart
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

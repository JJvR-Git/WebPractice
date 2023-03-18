class MyLib{
    myLib = [{
        "title" : "The Hobbit",
        "auther" : "J.R.R. Tolken",
        "year" : 1999,
        "pages" : 295,
        "read" : "read",
    },
    {
        "title" : "Dune",
        "auther" : "Frank Herbert",
        "year" : 1965,
        "pages" : 412,
        "read" : "not read",
    },
    {
        "title" : "Hitchikers Guide to the Galaxy",
        "auther" : "Douglas Adams",
        "year" : 1978,
        "pages" : 832,
        "read" : "read",
     }
    ];

    Book(title, auther, year, pages, read, index){
        this.title = title;
        this.auther = auther;
        this.year = year;
        this.pages = pages ;
        this.read = read;
        this.index = index
        this.info = function(){
            return `${title} by ${auther}, ${pages} pages, `
        };
    }

        openForm(){

            let form = document.getElementById("bookForm");
        
            if (form.style.display == "none"){
                form.style.display = "flex";
            }else{
                form.style.display = "none";
            }
        }

        checkValid(){
            let ins = document.getElementsByClassName("inBox");
            let insArr = Array.from(ins);
            let valid = 0;
        
            let read;
        
            if(insArr[4].value){
                read = "read"
            }else{
                read = "not read"
            }
        
            for(let i = 0; i < insArr.length - 1; i++){
                if(!insArr[i].validity.valid){
                    valid++;
                }
            }
        
            if(valid == 0){
                document.getElementById("valid").style.display = "none";
        
                addToLib(insArr[0].value, insArr[1].value, insArr[2].value, insArr[3].value, read, myLib.length + 1);
        
                for(let i = 0; i < insArr.length; i++){
                    insArr[i].value = "";
                }
        
                openForm();
            }
            else document.getElementById("valid").style.display = "block";
        
        } 

        addToLib(title, auther, year, pages, read, index){
            let newBook = new Book(title, auther, year, pages, read, index);
        
            myLib.push(newBook);
            displayBooks();
        }

        displayBooks(){
            let shelf = document.getElementById("bookshelf")
        
            shelf.innerHTML = "";
        
            for(let i = 0; i < myLib.length; i++){
                
                let insert = document.createElement("div");
                insert.classList.add("book");
        
                insert.innerHTML = `<h3>${myLib[i].title}</h3>
                                    <p>${myLib[i].auther}</p>
                                    <p>${myLib[i].year}</p>
                                    <p>${myLib[i].pages}</p>
                                    <p>${myLib[i].read}</p>
                                    <button onclick="deleteBook(${i})" class="button-3 delButt bookButt">Delete</button>
                                    <button onclick="markRead(${i})" class="button-3 readButt bookButt">Read</button>`;
        
                shelf.appendChild(insert);
            }
        }

        deleteBook(i){
            myLib.splice(i, 1);
        
            console.log("deleteing item " + i );
        
            displayBooks();
        }

        markRead(i){
            if(myLib[i].read === "read"){
                myLib[i].read = "not read"
            }else{
                myLib[i].read = "read"
            }
        
            displayBooks();
        }
}

let mylib = new MyLib;
import react from "react";
import './Header_Style/Header.css';
import 'bootstrap/dist/css/bootstrap.css';


export const Header = () => {
    return (
        <>
        <div className="job">
        <nav class="navbar bg-body-tertiary">
            <div class="container-fluid">
                <form class="d-flex" role="search">
                <input class="form-control me-2" type="search" placeholder="Заметка" aria-label="Search"/>
                <button class="btn btn-outline-success" type="submit">Добавить</button>
                </form>
            </div>
        </nav>
        </div>
         </>
    );
   
}
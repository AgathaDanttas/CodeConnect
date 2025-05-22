import '../styles/PaginaDeLogin.css'

function Checkbox() {
    return (
        <>
        <div className='form__campo-checkbox'>
            <input type="checkbox" id='lembrar' />
            <label htmlFor="lembrar"></label>
            </div>
            <p className='form__opcoes-texto'>Lembrar-me</p>
        </>
    )
    
}

export default Checkbox;
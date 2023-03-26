const Item = (img, title, desp, price) => {
    return (
        <>
            <section className="card">
                <img className="card-img" src={img} alt="game-img" />
                <article className="card-title">{title}</article>
                <article className="card-desp">{desp}</article>
                <section className="card-footer">
                    <article className="price">{price}</article>
                    <button className="cart-button">add to cart</button>
                </section>
            </section>
        </>
    )
}

export default Item;
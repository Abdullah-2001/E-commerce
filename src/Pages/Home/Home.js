import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../Store/CartSlice';
import data from '../../Products.json';
import { Col, Container, Row } from 'react-bootstrap';
import { IoIosArrowUp } from 'react-icons/io'
import ProductCard from '../../Components/Card/Card';
import Button from '../../Components/Button/Button';
import Women1 from '../../Assets/women1.jpg';
import Women2 from '../../Assets/women3.jpg';
import MuslimWomen from '../../Assets/muslim-women.jpg';
import MuslimWomen2 from '../../Assets/muslim-women2.jpg';
import Blog1 from '../../Assets/blog1.jpg';
import Blog2 from '../../Assets/blog2.jpeg';
import BLog3 from '../../Assets/blog3.jpg';
import './Home.css';

const Home = () => {
  
  const [products, setProducts] = useState([])
  const [days, setDays] = useState("")
  const [hours, setHours] = useState("")
  const [min, setMin] = useState("")
  const [sec, setSec] = useState("")
  const dispatch = useDispatch();
  const state = useSelector((state) => state)

  const add = (v) => {
    dispatch(addToCart(v))
    console.log(state);
  }

  useEffect(() => {
    setProducts(data)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    let dest = new Date("aug 25, 2022 12:00:00").getTime();
    setInterval(() => {
      let now = new Date().getTime();
      let diff = dest - now;
      setDays(Math.floor(diff / (1000 * 60 * 60 * 24)))
      setHours(Math.floor(diff % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)))
      setMin(Math.floor(diff % (1000 * 60 * 60) / (1000 * 60)))
      setSec(Math.floor(diff % (1000 * 60) / (1000)))
    }, 1000)
  }, [])

  return (
    <div>
      {/* Hero-section */}
      <section className='hero-section'>
        <img style={{ width: "100%", height: "500px", objectFit: "cover" }} className="bottom" src={Women1}></img>
        <img style={{ width: "100%", height: "500px", objectFit: "cover" }} className="top" src={Women2}></img>
        <div className='hero-container'>
          <p>Welcome to EkoCart</p>
          <h1>A New Online Shopping Experience</h1>
          <button>Shop Now</button>
        </div>
      </section>
      {/* Product-section */}
      <section className='product-section'>
        <div className='section-title'>
          <p>— New Collection</p>
          <h1>Trending Products</h1>
        </div>
        <div className='product-container'>
          <Container fluid>
            <Row>
              {products.products?.map((v) => {
                return (
                  <Col lg={3} key={v.id}>
                    <ProductCard style="product-card">
                      <img src={v.image} />
                      <div className='detail-container'>
                        <p className='name'>{v.name}</p>
                        <p className='price'>$ {v.price}</p>
                        <div style={{ display: "flex" }}>
                          <Button onClick={() => add(v)} style="add-to-cart" text="Add to cart" />
                          <Button style="view-product" text="View product" />
                        </div>
                      </div>
                    </ProductCard>
                  </Col>
                )
              })}
            </Row>
          </Container>
        </div>
        {/* Limited-section */}
        <section className='limited-offer-section'>
          <div className='limited-offer-bg'>
            <div className='limited-offer-tagline'>
              <p>LIMITED OFFER</p>
            </div>
            <div className='limited-offer-title'>
              <p>WEEKLY SALE ON 60% OFF ALL PRODUCTS</p>
            </div>
            <div className='countdown-container'>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <div style={{ display: "flex" }}>
                  <div className='day-container'>
                    <div className='day'>
                      <p>{days < 10 ? "0" + days : days}</p>
                    </div>
                    <p className='title'>DAYS</p>
                  </div>
                  <div className='hour-container'>
                    <div className='hour'>
                      <p>{hours < 10 ? "0" + hours : hours}</p>
                    </div>
                    <p className='title'>HOURS</p>
                  </div>
                  <div className='min-container'>
                    <div className='min'>
                      <p>{min < 10 ? "0" + min : min}</p>
                    </div>
                    <p className='title'>MINS</p>
                  </div>
                  <div className='sec-container'>
                    <div className='sec'>
                      <p>{sec < 10 ? "0" + sec : sec}</p>
                    </div>
                    <p className='title'>SEC</p>
                  </div>
                </div>
                <Button style="limited-offer-btn" text="Buy now" />
              </div>
            </div>
          </div>
        </section>
        {/* Trending-sale-section */}
        <section className='trending-sale-section'>
          <Container style={{ position: "relative" }}>
            <Row style={{ justifyContent: "center" }}>
              <Col lg={6} style={{ padding: "0" }}>
                <img className='trending-sale-img' src={MuslimWomen}></img>
                <div className='title-container'>
                  <p>Woman Party Collection</p>
                  <p>#Trendy Arrived Item Off 50%</p>
                  <Button style="shop-now" text="Shop Now" />
                </div>
              </Col>
              <Col lg={6} style={{ padding: "0" }}>
                <img className='trending-sale-img' src={MuslimWomen2}></img>
                <div className='title-container'>
                  <p>2022 Collection</p>
                  <p>New Stylish Trend Running Cloths</p>
                  <Button style="shop-now" text="Shop Now" />
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        {/* Blog-section */}
        <section className='blog-section'>
          <div className='section-title'>
            <p>— Fashion Blog</p>
            <h1>Latest News Feed</h1>
          </div>
          <Container>
            <Row style={{ justifyContent: "center" }}>
              <Col lg={4} style={{ padding: "0" }}>
                <img className='blog-img' src={Blog1}></img>
                <div className='blog-news-container'>
                  <p>Spring summer fashion trends new high collection</p>
                </div>
              </Col>
              <Col lg={4} style={{ padding: "0" }}>
                <img className='blog-img' src={Blog2}></img>
                <div className='blog-news-container'>
                  <p>When it’s Winter outdoors gifts but you feel like ekocart</p>
                </div>
              </Col>
              <Col lg={4} style={{ padding: "0" }}>
                <img className='blog-img' src={BLog3}></img>
                <div className='blog-news-container'>
                  <p>Whatever the will make it special For You Every</p>
                </div>
              </Col>
            </Row>
            <div style={{ textAlign: "center", marginTop: "40px" }}>
              <Button style="view-blog" text="View blog" />
            </div>
          </Container>
        </section>
        <div className='scroll-to-top' onClick={scrollToTop}>
          <IoIosArrowUp size={30} color="white" />
        </div>
      </section>
    </div>
  )
}

export default Home
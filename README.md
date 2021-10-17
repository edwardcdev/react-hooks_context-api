# Palm Clothing
[Live Demo](https://palm-clothing.herokuapp.com/)

E-Commerce Store allows users to browse the store, add/remove items from the cart, and purchase items using Stripe.

TODO: RESPONSIVE WEB DESIGN

## Technologies

- Frontend: React, Hooks, Typescript, ContextAPI
- Backend: Node, Express, MongoDB
- [Stripe API](https://stripe.com/docs)

Palm Clothing was built with a Node and Express on the backend, utilizing a MongoDB for data storage, with a React for a dynamic frontend and ContextAPI for state management. Stripe API was used to allow the users to go through the user experience of checking items from a cart with a fake credit card to allow purchase.

![](palmclothing-splash.gif)

## Features

- Secure frontend to backend user authentication using JWT and BCRYPT
- Simulate frontend to backend store checkout using Stripe API
- Aethetic UI Design of Home Page
- Allows Users to dynamically add, remove, and change number of items in their cart
- Optimizing Performance through React Hooks(useMemo, useCallback, lazy, and Suspense)


### Cart State Management using Context API
 
Facebook released react hooks recently and I wanted to take a try to learn the new technology, especially a new way for state management without redux. This application uses the ContextAPI to wrap the whole application within a provider so that the data will flow through the entire app. I created a cart provider to manage a user's shopping cart in order to show the data in multiple places; the items through a dropdown menu as well as a cart checkout page .

```javascript
interface ICart {
  hidden: boolean,
  toggleHidden: Function,
  cartItems: ShopItem[] | [],
  addItem: Function,
  removeItem: Function,
  clearCartItem: Function ,
  cartItemsCount: number,
  totalCost: number,
}

interface ICartProps {
  children: React.ReactNode;
}

export const CartContext = createContext<ICart>({
  hidden: true,
  toggleHidden: () => {},
  cartItems: [],
  addItem: () => {},
  removeItem: () => {},
  clearCartItem: () => {},
  cartItemsCount: 0,
  totalCost: 0
})

const CartProvider: React.FC<ICartProps> = ({ children }) => {
  const [hidden, setHidden] = useState<boolean>(true);
  const [cartItems, setCartItems] = useState<Array<ShopItem|any>> ([]);
  const [cartItemsCount, setCartItemsCount] = useState<number>(0);
  const [totalCost, setTotalCost] = useState<number>(0)

  const toggleHidden = () => setHidden(!hidden);

  const addItem = (item: ShopItem) => {
    setCartItems(addItemToCart(cartItems, item));
    setTotalCost(addPriceToTotal(totalCost, item.price));
    setCartItemsCount(addItemToCount(cartItemsCount, 1));
  };

  const removeItem = (item: ShopItem) => {
    setCartItems(removeItemFromCart(cartItems, item));
    setTotalCost(removePriceFromTotal(totalCost, item.price));
    setCartItemsCount(removeItemFromCount(cartItemsCount, 1));
  };

  const clearCartItem = (item: ShopItem) => setCartItems(filterItemFromCart(cartItems, item));

  useEffect(() => {
    setTotalCost(getCartTotalCost(cartItems));
    setCartItemsCount(getCartItemsCount(cartItems));
  }, [cartItems])

  return (
    <CartContext.Provider
      value={{ hidden, toggleHidden, cartItems, addItem, removeItem, cartItemsCount, totalCost, clearCartItem }}
    >
      {children}
    </CartContext.Provider>
  )
}
```

### Stripe API

A user needs to be able to purchase items that they added to our cart so I thought it would be fun to implement an external library to do the whole process for me. Stripe is a solution for the connection between banks for the payment system so I integrated a backend and frontend using the Stripe API library to conduct the transaction for me.

```javascript
//stripe-button.component.jsx
const StripeCheckOutButton = ({ price }) => {
  const priceForStripe = price * 100;

  const onToken = token => {
    axios({
      url: 'payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token: token
      }
    }).then(response => {
      alert('Payment successful');
    }).catch(error => {
      console.log('Payment error: ', JSON.parse(error));
      alert('There was an issue with your payment. Please make sure you use the provided credit card');
    });
  }

  return (
    <StripeCheckout
      label="Pay Now"
      name="Chris Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={key}
    />
  )
}

// app.js
app.post('/payment', (req, res) => {
  const body = {
    source: req.body.token.id,
    amount: req.body.amount,
    currency: 'usd'
  };

  stripe.charges.create(body, (stripeErr, stripeRes) => {
    if (stripeErr) {
      res.status(500).send({ error: stripeErr })
    } else {
      res.status(200).send({ success: stripeRes });
    }
  })
})
 
}
```
### Typescript

With the growing popularity of typescript, I wanted to try it myself and I can see why it's so loved! Static type languages allows a more robust codebase in allowing data that is passed in through each component to be more apparent and known to the person responsible for the code. With typescript I can clearly see the data flow throughout the application and able to catch bugs more frequently and often and in turn, spends less time debugging.

```javascript

interface CollectionItem {
  id: number,
  title: string,
  imageUrl?: string,
  linkUrl?: string,
  routeName?: string,
  items?: ShopItem[]
}

interface ShopItem {
  id: number,
  name: string,
  imageUrl: string,
  price: number,
  quantity?: number
}
```

### Optimization using React hooks and code splitting & error boundary

Although the codebase was very small and optimization would have little to no effect on the application. I took it upon myself to learn the new React.lazy and React.suspense to learn about the react tools for optimizing web applications. I lazy loaded the main components that had more nested components and data (HomePage & ShopPage) to reduce the file size into chunks when rendered into the browser

```javascript
const HomePage = lazy(() => import('./pages/homepage/homepage.component'));
const ShopPage = lazy(() => import('./pages/shop/shop.component'));
const Session = lazy(() => import('./pages/session/session.component'));
const CheckoutPage = lazy(() => import('./pages/checkout/checkout.component'));

const App = ({ location }) => {
  const { pathname } = location;
  return (
    <div className="app">
      <GlobalStyle/>
        {pathname !== "/" ? <Header/> : null}
      <Switch>
        <Route exact path="/" component={Splash}/>
        <ErrorBoundary>
          <Suspense fallback={<Spinner/>}>
            <Route exact path="/home" component={HomePage}/>
            <Route path="/shop" component={ShopPage}/>
            <Route path="/signin" component={Session}/>
            <Route exact path="/checkout" component={CheckoutPage}/>
          </Suspense>
        </ErrorBoundary>
      </Switch>
    </div>
  )
}
```

React introduces error boundaries in a way to catch errros down a child component tree to log those errors and display a UI that provides feedback instead of an ugly component tree error crashing.

I made this component to go along with the lazy loading of the rest of the app to provide a more visually appealing UI whenever there is an error message in the application.

```javascript
  class ErrorBoundary extends React.Component {
  constructor() {
    super();
    this.state = {
      hasErrored: false
    }
  }

  static getDerivedStateFromError(error) {
    return { hasErrored: true};
  }

  componentDidCatch(error, errorInfo) {
    console.log(error);
  }

  render() {
    if (this.state.hasErrored) {
      return (
        <ErrorImageOverlay>
          <ErrorImageContainer imageUrl='https://i.imgur.com/lKJiT77.png'/>
          <ErrorImageText>Sorry this page is broken!</ErrorImageText>
        </ErrorImageOverlay>
      )
    }
    return this.props.children;
  }
}
```
 

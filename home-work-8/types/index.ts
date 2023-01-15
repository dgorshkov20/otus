type OptionType = {
  [key: string]: string | boolean | number | CartItem[]
}

export interface SessionType {
  session: {
    destroy: (x: () => void) => void
    user: object
    isAuthenticated: boolean;
    save: (cb: (err: object) => void) => void
  }
}

interface BodyType extends Document{
  id: string
  email: string;
  password: string;
  name: string;
  userId: string;
  token: string;
}

type ParamsType = {
  token: string
  id: string
}

// @ts-ignore
export interface CustomRequest extends Request {
  file: {
    path: string
  }
  user: {
    _id: string
    name: string;
    clearCart: () => Promise<void>
    addToCart: (course: CartItem) => void
    populate: (arg: string) => any
    removeFromCart: (arg: string) => void
    toObject: () => string | boolean | number | CartItem[];
  }
  session: {
    isAuthenticated: boolean
    user: {
      _id: string
    }
  }
  body: BodyType
  params: ParamsType
  query: {
    allow: boolean
  }
  flash: (name: string, description?: string) => string
  csrfToken: () => string
}

// @ts-ignore
export interface CustomResponse extends Response {
  redirect: (path: string) => void
  render: (code: number | string, options: OptionType) => CustomResponse
  status: (x: number) => CustomResponse
  locals: {
    isAuth: boolean;
    csrf: string
  }
}

export type CourseType = {
  _id: string;
  userId: string;
}

export type CartItem = {
  courseId: {
    id: string
    _doc: any
  }
  price: number;
  count: number
}

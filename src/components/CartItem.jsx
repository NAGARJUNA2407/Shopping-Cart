import { toast } from 'react-hot-toast';
import { MdDelete } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { remove } from '../redux/Slices/cartSlice';

const CartItem = ({ item, itemIndex }) => {
	const dispatch = useDispatch();
	const removeFromCart = () => {
		dispatch(remove(item.id));
		toast.error('item Removed Successfully');
	};

	const Cart = useSelector((state) => {
		// console.log(state.Cart);
		return state.Cart;
	});
	return (
		<div
			className={`flex justify-between items-center md:gap-14 md:px-9 md:py-6  border-black text-slate-600 gap-6 px-3 py-2 `}>
			<div
				className=" flex  justify-between items-center hover:scale-110 transition duration-300 ease-in  w-[1/2]
		rounded-lg gap-3 p-4 mt-10 ml-5	  shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px]  ">
				<div>
					<img
						src={item.image}
						alt=""
						className="md:w-[165px] sm:w-[100px] w-[60px] transition-all duration-500"
					/>
				</div>
				<div className="flex flex-col md:gap-5 w-full">
					<h1 className="font-semibold sm:text-xl ">{item.title}</h1>
					<p className="md:text-base sm:text-[13px] text-[10px] ">
						{item.description.split(' ').slice(0, 10).join(' ') +
							'...'}{' '}
					</p>
					<div className='flex justify-between items-center"'>
						<p className='text-green-600 font-bold sm:text-lg    text-base"'>{item.price}</p>
						<div
							onClick={removeFromCart}
							className='bg-neutral-300 flex items-center justify-center sm:p-3 rounded-full mr-2
                                p-1"'>
							<MdDelete />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CartItem;
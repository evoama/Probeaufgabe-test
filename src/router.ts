import { createRouter, createWebHistory } from 'vue-router';
import ProductOverview from './views/ProductOverview.vue';
import ProductDetails from './views/ProductDetails.vue';

const routes = [
	{
		path: '/',
		name: 'Home',
		component: ProductOverview,
	},
	{
		path: '/product/:id',
		name: 'ProductDetails',
		component: ProductDetails,
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;

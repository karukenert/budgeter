import { createRouter, createWebHistory } from "vue-router";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const getCurrentUser = () => {
	return new Promise((resolve, reject) => {
		const removeListener = onAuthStateChanged(
			getAuth(),
			(user) => {
				removeListener();
				resolve(user);
			},
			reject
		);
	});
};

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{ path: "/", component: () => import("../views/Home.vue") },
		{ path: "/register", component: () => import("../views/Register.vue") },
		{ path: "/sign-in", component: () => import("../views/SignIn.vue") },
		{
			path: "/feed",
			component: () => import("../views/Feed.vue"),
			meta: { requresAuth: true },
		},
	],
});

router.beforeEach(async (to, from, next) => {
	if (to.matched.some(({ meta }) => meta?.requresAuth)) {
		if (await getCurrentUser()) {
			next();
		} else {
			alert("You don't have access");
			next("/");
		}
	} else {
		next();
	}
});

export default router;

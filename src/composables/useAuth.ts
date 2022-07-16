// import { computed, onMounted, ref, watchEffect } from "vue";
// import {
// 	onAuthStateChanged,
// 	getAuth,
// 	User,
// 	Auth,
// 	signOut,
// } from "firebase/auth";
// import { useRouter } from "vue-router";

// const router = useRouter();

// let auth: Auth;
// const userData = ref<User | null>(null);
// const isLoggedIn = computed<boolean>(() => (userData.value ? true : false));

// onMounted(() => {
// 	onAuthStateChanged(getAuth(), (user) => {
// 		if (user) {
// 			userData.value = user;
// 		} else {
// 			userData.value = null;
// 		}
// 	});
// });

// const handleSignOut = async () => {
// 	await signOut(getAuth());
// 	router.push("/");
// };

// const getCurrentUser = () => {
// 	return new Promise((resolve, reject) => {
// 		const removeListener = onAuthStateChanged(
// 			getAuth(),
// 			(user) => {
// 				removeListener();
// 				resolve(user);
// 			},
// 			reject
// 		);
// 	});
// };

// export default function useAuth() {
// 	return {
// 		isLoggedIn,
// 		signOut,
// 		handleSignOut,
// 		getCurrentUser,
// 	};
// }
export {}

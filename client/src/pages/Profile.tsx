import { useEffect } from "react";
import Container from "../ui/Container";
import Registration from "../ui/profile/Registration";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../lib/firebase";
import UserProfile from "../ui/profile/UserProfile";
import { store } from "../lib/store";
import Loading from "../ui/Loading";

const Profile = () => {
  const { currentUser, getUserInfo, isLoading } = store();

  useEffect(() => {
    const unSub = onAuthStateChanged(auth, (user) => {
      getUserInfo(user?.uid);
    });
    return () => {
      unSub();
    };
  }, [getUserInfo]);
  return (
    <Container>
      {currentUser ? (
        <UserProfile currentUser={currentUser} />
      ) : (
        <Registration />
      )}
      {/* <Registration /> */}
      {isLoading && <Loading />}
    </Container>
  );
};

export default Profile;

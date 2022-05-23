import GlobalHeader from "../../components/modules/globalHeader";
import default_profile from "../../assets/img/default-profile.svg";
import MyPageItem from "../../components/modules/settingItem";

const MyPage = (props) => {
  return (
    <div>
      <GlobalHeader />
      <main>
        <section>
          <div>
            <img src={default_profile} alt="" />
          </div>
          <h3>닉네임</h3>
        </section>

        <ul>
          <MyPageItem text="프로필 변경" />
          <MyPageItem text="비밀 번호 변경" />
          <MyPageItem text="로그 아웃" />
          <MyPageItem text="회원 탈퇴" />
        </ul>
      </main>
    </div>
  );
};

export default MyPage;

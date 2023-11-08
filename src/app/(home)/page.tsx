import EditButton from './_components/edit-button';
import HomeSection from './_components/home-section';
import SkillList from './_components/skill-list';

const HomePage = () => {
  return (
    <main className="flex w-full flex-1 flex-col items-center justify-between p-24">
      <HomeSection>
        <h1 className="text-5xl">SAMUEL KIM</h1>
        <h2 className="text-3xl">
          8 YOE | Front-end Enthusiast, Full-stack Web Engineer
        </h2>
      </HomeSection>
      <HomeSection title="Expertise">
        <EditButton href="/edit/skills" />
        <SkillList />
      </HomeSection>
    </main>
  );
};

export default HomePage;

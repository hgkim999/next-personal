import SkillList from './_components/skill-list';

const HomePage = () => {
  return (
    <main className="flex flex-1 flex-col items-center justify-between p-24">
      <div>
        <h1 className="text-5xl">SAMUEL KIM</h1>
        <SkillList />
      </div>
    </main>
  );
};

export default HomePage;

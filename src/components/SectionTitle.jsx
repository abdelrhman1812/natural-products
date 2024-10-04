const SectionTitle = ({ title }) => {
  return (
    <>
      <section className="section-title d-flex justify-content-between align-items-center py-2  position-relative">
        <h2>{title}</h2>
        <a className="text-center p-2"> عرض المزيد</a>
      </section>
    </>
  );
};

export default SectionTitle;

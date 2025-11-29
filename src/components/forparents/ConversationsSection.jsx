// Conversations Section - "The Conversations You're Not Having"

const conversationData = [
  { ask: '"How was practice?"', get: '"Fine."' },
  { ask: '"Everything OK with the team?"', get: '"Yeah."' },
  { ask: '"You seem quiet today..."', get: '"I\'m just tired."' },
  { ask: '"Want to talk about anything?"', get: '"No."' },
  { ask: '"Are you sure you\'re—"', get: '"Mom, I said I\'m FINE."', highlight: true },
];

const ConversationsSection = () => {
  return (
    <section className="parents-conversations-section">
      <div className="parents-conversations-inner">
        {/* Header */}
        <div className="parents-conversations-header">
          <span className="parents-conversations-label">REALITY</span>
          <h2 className="parents-conversations-title">
            The Conversations You're Not Having
          </h2>
        </div>

        {/* Table Wrapper */}
        <div className="parents-table-wrapper">
          {/* Glow Effect - sibling of table, behind it */}
          <div className="parents-conversations-glow">
            <img
              src="/assets/parents-ellipse-glow.svg"
              alt=""
              className="parents-glow-img"
            />
          </div>

          {/* Table */}
          <div className="parents-conversations-table">
            {/* Table Header */}
            <div className="parents-table-header">
              <div className="parents-table-col-left">What You Ask</div>
              <div className="parents-table-col-right">What You Get</div>
            </div>

            {/* Table Rows */}
            {conversationData.map((item, index) => (
              <div key={index} className="parents-table-row">
                <div className="parents-table-col-left">{item.ask}</div>
                <div className={`parents-table-col-right ${item.highlight ? 'highlight' : ''}`}>
                  {item.get}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Text */}
        <p className="parents-conversations-bottom">
          You're not a bad parent.
          <br />
          <span className="highlight">You're just missing the data.</span>
        </p>
      </div>
    </section>
  );
};

export default ConversationsSection;

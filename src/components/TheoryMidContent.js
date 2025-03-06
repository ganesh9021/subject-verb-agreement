import React from "react";

const TheoryMidContent = () => {
  return (
    <div
      className="p-3 scrollbar-primary"
      style={{ overflow: "auto", width: "100%", margin: "10px 10px 10px 10px" }}
    >
      <div className="fw-bolder">Objective</div>
      <ul>To learn the subject verb agreement.</ul>
      <div className="fw-bolder">Basic Rule:</div>
      <div>
        <p>
          A singular subject (she, Bill, car) takes a singular verb (is, goes,
          shines), whereas a plural subject (they,we) takes a plural verb(are,
          go, shine).
        </p>
      </div>
      <div className="fw-bolder">Example:</div>
      <ul>
        <li>
          <u>singular subject:</u> My brother is a nutritionist.
        </li>
        <li>
          <u>plural subject:</u> My sisters are mathematicians.
        </li>
      </ul>
      <div className="fw-bolder">Rule 1</div>
      <div>
        <p>
          A subject will come before a phrase beginning with <b>of</b>. This is
          a key rule for understanding subjects. The word <b>of</b> is the
          culprit in many, perhaps most, subject-verb mistakes.
        </p>
      </div>
      <div className="fw-bolder">Example</div>
      <ul>
        <li>
          <u>Incorrect:</u> A bouquet of yellow roses lend color and fragrance
          to the room.
        </li>
        <li>
          <u>Correct:</u> A bouquet of yellow roses lends . . . (bouquet lends,
          not roses lend)
        </li>
      </ul>
      <div className="fw-bolder">Rule 2</div>
      <div>
        <p>
          Two singular subjects connected by{" "}
          <b>or, either/or, or neither/nor</b>
          require a singular verb.
        </p>
      </div>
      <div className="fw-bolder">Example:</div>
      <ul>
        <li>
          My aunt <i>or</i> my uncle is arriving by train today.
        </li>
        <li>
          <i>Neither</i> Juan <i>nor</i> Carmen is available.{" "}
        </li>
        <li>
          <i>Either</i> Kiana <i>or</i> Casey is helping today with stage
          decorations.
        </li>
      </ul>
      <div className="fw-bolder">Rule 3</div>
      <div>
        <p>
          The verb in an or, either/or, or neither/nor sentence agrees with the
          noun or pronoun closest to it.
        </p>
      </div>
      <div className="fw-bolder">Example</div>
      <ul>
        <li>
          <i>Neither</i> the plates <i>nor</i> the serving bowl goes on that
          shelf.
        </li>
        <li>
          <i>Neither</i> the serving bowl <i>nor</i> the plates go on that
          shelf.
        </li>
      </ul>
      <div className="fw-bolder">Rule 4</div>
      <div>
        <p>
          As a general rule, use a plural verb with two or more subjects when
          they are connected by <b>and</b>.
        </p>
      </div>
      <div className="fw-bolder">Example</div>
      <ul>
        <li>A car and a bike are my means of transportation.</li>
      </ul>
      <div className="fw-bolder">Exceptions</div>
      <ul>
        <li>Breaking and entering is against the law.</li>
        <li>The bed and breakfast was charming.</li>
        <li>
          In those sentences, breaking and entering and bed and breakfast are
          compound nouns.
        </li>
      </ul>
      <div className="fw-bolder">Rule 5</div>
      <div>
        <p>
          Sometimes the subject is separated from the verb by such words as{" "}
          <b>along with, as well as, with, besides, not.</b>These words and
          phrases are not part of the subject. Ignore them and use a singular
          verb when the subject is singular.
        </p>
      </div>
      <div className="fw-bolder">Example</div>
      <ul>
        <li>
          The politician, <i>along with</i> the newsmen, is expected shortly.
        </li>
        <li>
          Excitement, <i>as well as</i> nervousness, is the cause of her
          shaking.
        </li>
      </ul>
      <div className="fw-bolder">Rule 6</div>
      <div>
        <p>
          With words that indicate portions :{" "}
          <b>a lot, a majority, some, all, etc.</b>
          Rule 1 given earlier is reversed, and we are guided by the noun after
          of. If the noun after of is singular, use a singular verb. If it is
          plural, use a plural verb.
        </p>
      </div>
      <div className="fw-bolder">Example</div>
      <ul>
        <li>A lot of the pie has disappeared.</li>
        <li>A lot of the pies have disappeared.</li>
        <li>A third of the city is unemployed.</li>
        <li>A third of the people are unemployed.</li>
      </ul>
      <div className="fw-bolder">Rule 7</div>
      <div>
        <p>
          In sentences beginning with <b>here</b> or <b>there</b>, the true
          subject follows the verb.
        </p>
      </div>
      <div className="fw-bolder">Example</div>
      <ul>
        <li>
          <i>There</i> are four hurdles to jump.
        </li>
        <li>
          <i>There</i> is a high hurdle to jump.
        </li>
      </ul>
      <div className="fw-bolder">Rule 8</div>
      <div>
        <p>
          Use a singular verb with distances, periods of time, sums of money,
          etc., when considered as a unit.
        </p>
      </div>
      <div className="fw-bolder">Example</div>
      <ul>
        <li>Three miles is too far to walk.</li>
        <li>Five years is the maximum sentence for that offense.</li>
        <li>Ten dollars is a high price to pay.</li>
      </ul>
      <div className="fw-bolder">Exceptions</div>
      <ul>
        <li>Ten dollars (i.e., dollar bills) were scattered on the floor.</li>
      </ul>
      <div className="fw-bolder">Rule 9</div>
      <div>
        <p>
          Some collective nouns, such as{" "}
          <b>family, couple, staff, audience, etc.</b>
          may take either a singular or a plural verb, depending on their use in
          the sentence.
        </p>
      </div>
      <div className="fw-bolder">Example</div>
      <ul>
        <li>The staff is in a meeting. (Staff is acting as a unit.)</li>
        <li>
          The couple disagree about disciplining their child. (The couple refers
          to two people who are acting as individuals.)
        </li>
      </ul>
    </div>
  );
};

export default TheoryMidContent;

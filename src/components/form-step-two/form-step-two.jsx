import React from "react";
import {
  functionType,
} from "../../types/types.js";

const FormStepTwo = (props) => {
  const {
    onFederalLawChange,
  } = props;

  return (
    <React.Fragment>
      <li className="form__item">
        <span className="form__sub-text">Выбор пола</span>
        <ul className="form__list form__list--radio">
          <li>
            <input id="type-kind-men" type="radio" name="kind" value="men" checked />
            <label htmlFor="type-kind-men">
              М
            </label>
          </li>
          <span> / </span>
          <li>
            <input id="type-kind-women" type="radio" name="kind" value="women" />
            <label htmlFor="type-kind-women">
              Ж
            </label>
          </li>
        </ul>
      </li>

      <li className="form__item">
        <span className="form__sub-text">Образование</span>
        <select className="form__field" name="education">
          <option selected="selected">Ваше образование</option>
          <option>Среднее</option>
          <option>Среднее специальное</option>
          <option>Высшее</option>
        </select>
      </li>

      <li className="form__item">
        <span className="form__sub-text">Рассказать о себе</span>
        <textarea
          className="form__textarea"
          name="about"
          placeholder="Расскажите о себе"
        />
      </li>

      <li className="form__item">
        <span className="form__sub-text">Подпишитесь</span>
        <ul className="form__list form__list--checkbox">
          <li>
            <input id="rubrics-politics" type="checkbox" name="rubrics-politics" />
            <label htmlFor="rubrics-politics">
              Политика
            </label>
          </li>

          <li>
            <input id="rubrics-economics" type="checkbox" name="rubrics-economics" />
            <label htmlFor="rubrics-economics">
              Экономика
            </label>
          </li>

          <li>
            <input id="rubrics-sport" type="checkbox" name="rubrics-sport" />
            <label htmlFor="rubrics-sport">
              Спорт
            </label>
          </li>

          <li>
            <input id="rubrics-science" type="checkbox" name="rubrics-science" />
            <label htmlFor="rubrics-science">
              Наука
            </label>
          </li>

          <li>
            <input id="rubrics-auto" type="checkbox" name="rubrics-auto" />
            <label htmlFor="rubrics-auto">
              Авто
            </label>
          </li>
        </ul>
      </li>

      <li className="form__item">
        <label className="form__registration-federal-law" htmlFor="form__registration-federal-law">
          <input
            id="form__registration-federal-law"
            type="checkbox"
            name="personal"
            required=""
            onChange={onFederalLawChange}
          />
          <span></span>
          <p>Я принимаю условия <a href="#">Пользовательского соглашения</a></p>
        </label>
      </li>
    </React.Fragment>
  );
};

FormStepTwo.propTypes = {
  onFederalLawChange: functionType,
};

export default FormStepTwo;

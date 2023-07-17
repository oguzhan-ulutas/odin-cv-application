import React, { Component } from "react";

export class FormGeneralInfoEdit extends Component {
  render() {
    return (
      <div className="form-general-edit">
        <form
          id="form-general-edit"
          onSubmit={(e) => {
            this.props.handleEdit(e, "generalInfo", "generalInfos");
          }}
        >
          <div>
            <label htmlFor="first-name">FIRST NAME</label>
            <input
              type="text"
              id="first-name"
              placeholder="* Thor..."
              name="first-name"
              onChange={(e) => {
                this.props.handleChange(e, "generalInfo", "firstName");
              }}
            />
          </div>
          <div>
            <label htmlFor="last-name">LAST NAME</label>
            <input
              type="text"
              id="last-name"
              placeholder="Odinson"
              name="last-name"
              onChange={(e) => {
                this.props.handleChange(e, "generalInfo", "lastName");
              }}
            />
          </div>
          <div>
            <label htmlFor="user-email">EMAIL</label>
            <input
              type="email"
              id="user-email"
              placeholder="* example@example.com"
              name="user-email"
              onChange={(e) => {
                this.props.handleChange(e, "generalInfo", "eMail");
              }}
            />
          </div>
          <div>
            <label htmlFor="user-tel">PHONE NUMBER</label>
            <input
              type="tel"
              id="user-tel"
              placeholder="111-111-11-11"
              name="user-tel"
              onChange={(e) => {
                this.props.handleChange(e, "generalInfo", "tel");
              }}
            />
          </div>
          <button
            type="submit"
            onClick={() => {
              this.props.closeForm("form-general-edit");
            }}
          >
            Edit
          </button>
        </form>
      </div>
    );
  }
}

export class FormEducationEdit extends Component {
  render() {
    return (
      <div className="form-education-edit">
        <form
          id="form-education-edit"
          onSubmit={(e) => {
            this.props.handleEdit(e, "education", "educations");
          }}
        >
          <div>
            <label htmlFor="institution">INSTITUTION</label>
            <input
              type="text"
              id="institution"
              name="institution"
              onChange={(e) => {
                this.props.handleChange(e, "education", "institution");
              }}
            />
          </div>
          <div>
            <label htmlFor="date-from">START DATE</label>
            <input
              type="date"
              id="date-from"
              name="date-from"
              onChange={(e) => {
                this.props.handleChange(e, "education", "dateFrom");
              }}
            />
          </div>
          <div>
            <label htmlFor="date-to">END DATE</label>
            <input
              type="date"
              id="date-to"
              name="date-to"
              onChange={(e) => {
                this.props.handleChange(e, "education", "dateTo");
              }}
            />
          </div>
          <div>
            <label htmlFor="qualification">QUALIFICATION</label>
            <input
              type="text"
              id="qualification"
              name="qualification"
              onChange={(e) => {
                this.props.handleChange(e, "education", "qualification");
              }}
            />
          </div>
          <button
            type="submit"
            onClick={() => {
              this.props.closeForm("form-education-edit");
            }}
          >
            Edit
          </button>
        </form>
      </div>
    );
  }
}

export class FormExperience extends Component {
  render() {
    return (
      <div className="form-experience">
        <form
          id="form-experience"
          onSubmit={(e) =>
            this.props.handleSubmit(e, "experience", "experiences")
          }
        >
          <div>
            <label htmlFor="company">COMPANY</label>
            <input
              type="text"
              id="company"
              name="company"
              onChange={(e) => {
                this.props.handleChange(e, "experience", "company");
              }}
            />
          </div>
          <div>
            <label htmlFor="title">TITLE</label>
            <input
              type="text"
              id="title"
              name="title"
              onChange={(e) => {
                this.props.handleChange(e, "experience", "title");
              }}
            />
          </div>
          <div>
            <label htmlFor="date-from-experience">START DATE</label>
            <input
              type="date"
              id="date-from-experience"
              name="date-from-experience"
              onChange={(e) => {
                this.props.handleChange(e, "experience", "dateFrom");
              }}
            />
          </div>
          <div>
            <label htmlFor="date-to-experience">END DATE</label>
            <input
              type="date"
              id="date-to-experience"
              name="date-to-experience"
              onChange={(e) => {
                this.props.handleChange(e, "experience", "dateTo");
              }}
            />
          </div>
          <div>
            <label htmlFor="tasks">TASKS</label>
            <input
              type="text"
              id="tasks"
              name="tasks"
              onChange={(e) => {
                this.props.handleChange(e, "experience", "tasks");
              }}
            />
          </div>
          <button
            type="submit"
            onClick={() => {
              this.props.closeForm("form-experience");
            }}
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export class FormExperienceEdit extends Component {
  render() {
    return (
      <div className="form-experience-edit">
        <form
          id="form-experience-edit"
          onSubmit={(e) =>
            this.props.handleEdit(e, "experience", "experiences")
          }
        >
          <div>
            <label htmlFor="company">COMPANY</label>
            <input
              type="text"
              id="company"
              name="company"
              onChange={(e) => {
                this.props.handleChange(e, "experience", "company");
              }}
            />
          </div>
          <div>
            <label htmlFor="title">TITLE</label>
            <input
              type="text"
              id="title"
              name="title"
              onChange={(e) => {
                this.props.handleChange(e, "experience", "title");
              }}
            />
          </div>
          <div>
            <label htmlFor="date-from-experience">START DATE</label>
            <input
              type="date"
              id="date-from-experience"
              name="date-from-experience"
              onChange={(e) => {
                this.props.handleChange(e, "experience", "dateFrom");
              }}
            />
          </div>
          <div>
            <label htmlFor="date-to-experience">END DATE</label>
            <input
              type="date"
              id="date-to-experience"
              name="date-to-experience"
              onChange={(e) => {
                this.props.handleChange(e, "experience", "dateTo");
              }}
            />
          </div>
          <div>
            <label htmlFor="tasks">TASKS</label>
            <input
              type="text"
              id="tasks"
              name="tasks"
              onChange={(e) => {
                this.props.handleChange(e, "experience", "tasks");
              }}
            />
          </div>
          <button
            type="submit"
            onClick={() => {
              this.props.closeForm("form-experience-edit");
            }}
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}

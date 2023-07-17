import React, { Component } from "react";

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

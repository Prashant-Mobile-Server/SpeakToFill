import React from 'react'// API constants

export const form = (
    <form className="form-container" >
        <div className="form-group">
            <label>First Name</label>
            <input
                type="text"
                name="first_name"
            />
        </div>
        <div className="form-group">
            <label>Last Name</label>
            <input
                type="text"
                name="last_name"
            />
        </div>
        <div className="form-group">
            <label>Email</label>
            <input
                type="email"
                name="email"
            />
        </div>
        <div className="form-group">
            <label>Phone</label>
            <input
                type="text"
                name="phone"
            />
        </div>
        <div className="form-group">
            <label>Candidate City</label>
            <input
                type="text"
                name="candidate_city"
            />
        </div>
        <div className="form-group">
            <label>Primary Skill</label>
            <input
                type="text"
                name="primary_skill"
            />
        </div>
        <div className="form-group">
            <label>Secondary Skill</label>
            <input
                type="text"
                name="secondary_skill"
            />
        </div>
        <div className="form-group">
            <label>Years of Relevant Experience</label>
            <input
                type="number"
                name="relevant_experience"
            />
        </div>
        <div className="form-group">
            <label>Overall Experience</label>
            <input
                type="number"
                name="overall_experience"
            />
        </div>
        <div className="form-group">
            <label>Office City</label>
            <input
                type="text"
                name="office_city"
            />
        </div>
        <div className="form-group">
            <label>Relationship with Referral</label>
            <input
                type="text"
                name="referral_relationship"
            />
        </div>
        <div className="form-group">
            <label>Comment</label>
            <textarea
                name="comment"
            />
        </div>
    </form>
);
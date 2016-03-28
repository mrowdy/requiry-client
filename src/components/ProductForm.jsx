import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

export default React.createClass({
    mixins: [PureRenderMixin],
    handleSave: function(e){
        e.preventDefault();
        this.props.onSave ? this.props.onSave() : null;
    },
    handleChange: function(e){
        e.preventDefault();

        const data = {
            name: e.target.value
        };

        this.props.onChange ? this.props.onChange(data) : null;
    },
    render: function() {
        return <div className="product-form">
            <form className="t-form"
                  onSubmit={this.handleSave}>
                <label htmlFor="name">
                    Name:
                    <input onChange={this.handleChange} className="t-name" type="text" name="name" value={this.props.value} />
                </label>
                <input className="t-save" type="submit" value="save" />
            </form>
        </div>
    }
});